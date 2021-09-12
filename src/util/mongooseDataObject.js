module.exports = {
    mongooseObjects : function(datas){
        return datas.map( (data => data.toObject()));
    },
    mongooseData : function(data){
        return data ? data.toObject : data;
    }
}