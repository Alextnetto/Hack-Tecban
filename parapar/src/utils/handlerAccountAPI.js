import axios from "axios"

const accountGetGrant = async() => {
  const url = "http://ec2-3-133-90-199.us-east-2.compute.amazonaws.com/api/V1/account/authGrant" 
  const result = await axios.post(url)

  if(result.data != undefined)
    window.open(result.data.link)
}

export {accountGetGrant}