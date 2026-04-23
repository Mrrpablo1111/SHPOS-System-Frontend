export const getChangeType = (growth)=>{
    if(growth > 0) return "Positive";
    if(growth < 0) return "Negative";

    return "neutral"
}