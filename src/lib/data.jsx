export const getAllCategories=async()=>{
const res=await fetch('https://openapi.programming-hero.com/api/news/categories')
const data=await res.json()
return data.data
}

// getNews by category_id:
export const getNewsByCategoryId=async(category_id)=>{
const res=await fetch(`https://openapi.programming-hero.com/api/news/category/${category_id}`)
const data=await res.json()
return data.data;
}
export const getNewsDetailsById=async(n_id)=>{
const res=await fetch(`https://openapi.programming-hero.com/api/news/${n_id}`)
const data=await res.json()
return data.data[0];
}