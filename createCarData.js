const fs = require("fs")
const csv = require("csvtojson")

const createCarData = async ()=>{
    let CarsData = await csv().fromFile(
        "./data.csv"
    )
    console.log(CarsData)
    CarsData = CarsData.map((car)=>{
        return {
            make: car.Make,
            model: car.Model,
            style: car["Vehicle Style"],
            size: car["Vehicle Size"],
            transmission_type: car["Transmission Type"],
            price: car.MSRP,
            release_date: car.Year,
            isDeleted: false,
        }
    })
    
    fs.writeFileSync(
        "./cars.json",
        JSON.stringify(CarsData)
      );
    
}

createCarData()