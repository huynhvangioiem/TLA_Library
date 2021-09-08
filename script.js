/* Toasts */
function showToast(style) {
    toast({
        title: "This is title of message.", //Tiêu đề thông báo
        message: "This is a content of message. This message's style is " + style, //Nội dung thông báo
        style: style, //Kiểu thông báo
        duration: 10000, // default 10s
        // iconType: "info" //Loại thông báo (success,info,warning,error)
    })
}