document.addEventListener('DOMContentLoaded', function () {
    //EMAILJS
    (function () {
        emailjs.init("rnjvZe8AW2oODneKj");
    })();

    function sendMail() {
        var params = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            object: document.getElementById("object").value,
            message: document.getElementById("message").value
        }

        const serviceID = "service_0cv1g1m";
        const templateID = "template_f93ai3o";

        emailjs.send(serviceID, templateID, params)
            .then(
                res => {
                    document.getElementById("name").value = "";
                    document.getElementById("email").value = "";
                    document.getElementById("object").value = "";
                    document.getElementById("message").value = "";
                    console.log(res);
                    alert("Your message sent successfully");

                }
            )
            .catch((err) => console.log(err));
    }
});


