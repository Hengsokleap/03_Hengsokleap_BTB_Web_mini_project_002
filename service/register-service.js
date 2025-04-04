export async function registerService({ email, password, username }) {

    const res = await fetch(`http://96.9.81.187:8080/api/v1/auth/register`, {
        method: "POST",
        headers: {
            "accept": "*/*",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            username: username,
            email: email,
            password: password,
           
        })
    });
    const data = await res.json();
    console.log("data =============",data)
    return data;

}
