

const jobLoader = async({params}:{params:any}) =>{
    const res = await fetch(`/api/jobs/${params.id}`);
    const data = await res.json();
    return data;
}

export default jobLoader;