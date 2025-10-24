// export function formatDate(date){
//     return date.toLocaleDateString("en-us",{
//         month:"short",
//         day:"numeric",
//         year: "numeric",
//     })
// }
// export function formatDate(date){
//     return date.toDateString("en-us",{
//         month:"short",
//         day:"numeric",
//         year: "numeric",
//     })
// }


 export const  formatDate = (date) =>{
 
    return date.toDateString("en-us",{
        month:"short",
        day:"numeric",
        year: "numeric",
    })
}