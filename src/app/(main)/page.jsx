import { redirect } from "next/navigation";

const default_id='08'

const Home=async()=> {
 redirect(`/category/${default_id}`)
 
}
export default Home;
