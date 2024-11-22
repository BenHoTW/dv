import uvicorn
from fastapi import FastAPI
import pandas as pd
# from fastapi.middleware.cors import CORSMiddleware
# from fastapi.responses import ORJSONResponse
# from fastapi.responses import FileResponse
from pandas import DataFrame
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from fastapi.requests import Request

app = FastAPI()

# origins = ["*"]
#
# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=origins,
#     allow_credentials=True,
#     allow_methods=["*"],
#     allow_headers=["*"],
# )

# download dataset from here
df: DataFrame = pd.read_csv("supermarket_sales.csv")

df["Date"] = pd.to_datetime(df["Date"], format="%m/%d/%Y")

df["Hour"] = pd.to_datetime(df["Time"], format="%H:%M").dt.hour

#掛載static資料夾來處理靜態網頁
app.mount("/static", StaticFiles(directory="static"), name="static")

#建立 Jinja2 模板引擎的實例，指定模板所在的資料夾
templates = Jinja2Templates(directory="templates")

@app.get("/")
async def read_root(request: Request):
    # data = {"title": "我的網站", "user": "Ben Ho"}
    data = await read_data()
    #傳遞 request 物件到模板，以供 Jinja2 使用
    # return templates.TemplateResponse("02_index.html", {"request": request})
    return templates.TemplateResponse("index.html", {"request": request, "data": data})

async def univariate_data_analysis(groupby: str, interested_column: str, title: str):
  groupby_data = df.groupby(groupby)[interested_column].sum().sort_values(ascending=False)
  groupby_data
  label_names = groupby_data.index.tolist()
  label_names

  data = groupby_data.values.tolist()
  data
  return_data = {"labels": label_names, "data": data, "label": title}
  return return_data

async def get_shooping_hour_data():
    bins = [0, 12, 18, 24]
    labels = ['Morning', 'Afternoon', 'Evening']
    df["Day time"] = pd.cut(x = df['Hour'], bins = bins, labels = labels, include_lowest = True)
    shopping_time = df.groupby("Branch")["Day time"].value_counts()

    final_shopping_time_data = {"labels": ["分部 A", "分部 B", "分部 C"], "label": "各分部每個時段的交易筆數"}

    for i, index in enumerate(["A", "B", "C"]):
        result = {"label": labels[i], "data": shopping_time[index].tolist()}
        final_shopping_time_data[index] = result

    return final_shopping_time_data


@app.get("/data")
async def read_data():
    # sales per branch
    total_sales_per_branch = await univariate_data_analysis("Branch", "Total", "各分部的總銷售額")

    # sale by gender
    sales_by_gender = await univariate_data_analysis("Gender", "Total", "按性別統計的銷售額")

    # gross profit by branch
    gross_income_data = await univariate_data_analysis("Branch", "gross income", "Gross Profit By Branch")

    # product line by sales
    product_line_by_total_sales = await univariate_data_analysis("Product line", "Total", "各產品線的總銷售額")

    # product line by gross profit
    product_line_by_gross_income= await univariate_data_analysis("Product line", "gross income", "各產品線的毛利(Gross Income)")

    # product line by rating
    product_line_by_rating = await univariate_data_analysis("Product line", "Rating", "Product Line By Rating")

    # payment method
    payment_methods = await univariate_data_analysis("Payment", "Total", "各付款方式的交易總額")

    # product line by quantity
    product_line_by_quantity = await univariate_data_analysis("Product line", "Quantity", "各產品線的銷售數量")

    # busy hours data
    shooping_hour_data = await get_shooping_hour_data()

    # return {"data": {
    return {
        "total_sales_per_branch": total_sales_per_branch,
        "sales_by_gender": sales_by_gender,
        "gross_income_data": gross_income_data,
        "product_line_by_total_sales": product_line_by_total_sales,
        "product_line_by_gross_income": product_line_by_gross_income,
        "product_line_by_rating": product_line_by_rating,
        "payment_methods": payment_methods,
        "product_line_by_quantity": product_line_by_quantity,
        "shooping_hour_data": shooping_hour_data
    }
    # }}


@app.get("/keep-alive")
def default_index():
    return "running"

if __name__ == '__main__':
    uvicorn.run("main:app", reload=True)