const findFun=async (res,Model)=>{
    try{
        const results=await Model.find()
        if(results){
            res.status(200).json(results)
        }

        else{
            res.status(404).send("Sorry,No data found!")
        }
    }

    catch(error){
        console.error(error);
        res.status(500).send("Server Error!")

    }
}

module.export=findFun;