async function serverPostData(url,data){
    const res = await fetch(url,{
        method : 'POST',
        body : data,
    });
    return await res.text();
};

async function serverGetData(url){
    const res = await fetch(url);

    if(!res.ok){
        throw new Error(`Could not fetch ${url}, status ${res.status} `);
    }
    return await res.json();
};

export{serverPostData,serverGetData};