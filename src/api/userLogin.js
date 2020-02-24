import service from "@/utils/request"

export function GetSms(){
    service.request({
        method: "get",
        url: "/user"
    }).then(function(res){
        console.log(res)
    })
}
