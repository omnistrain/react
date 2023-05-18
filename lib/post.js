const pages = [
    {id:'1', title:'truc'},
    {id:'2', title:'truc2'},

];

export async function getSortedPostsData() {


    //const res = await fetch('https://www.prevision-meteo.ch/services/json/lat=46.259lng=5.235');
    
    return pages.map((page)=>{
        console.log(page);
        return{
            params:{
                id: page.id
            }
        };

    });
  }
  export function getAllPostIds() {
   

    //const res = await fetch('https://www.prevision-meteo.ch/services/json/lat=46.259lng=5.235');
    
    return pages.map((page)=>{
        console.log(page.id);
        return{
            params:{
                id: page.id
            }
        };

    });
  }


  export function getPostData(id){
    return{
        id:id,
       title: "info",
    };

  }

