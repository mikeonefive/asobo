$("#register-button").on("click", async function (e) {
    e.preventDefault();

    let formData = new FormData();
    let salutation = $("#salutation").val() + ".";
    salutation === "Other" ? $("#salutation-other").val() : salutation;
    formData.append("salutation", salutation);
    formData.append("username", $("input[name='username']").val());
    formData.append("firstName", $("input[name='firstname']").val());
    formData.append("surname", $("input[name='surname']").val());
    formData.append("email", $("input[name='email']").val());
    formData.append("password", $("#register-password").val());
    //formData.append("passwordConf", $("#register-password-conf").val());
    formData.append("location", $("input[name='location']").val());

    const fileInput = $("input[name='profile_picture']")[0];
    if (fileInput && fileInput.files.length > 0) {
        formData.append("profilePicture", fileInput.files[0]);
    }

    const url = HOSTADDRESS + '/api/users';

    try {
        const response = await fetch(url, {
            method: "POST",
            body: formData
        });

        if (!response.ok) {
            throw new Error(`Response status: ${response.statusText}`);
        }

        const data = await response.json();
        $(".register-form").html(`User: ${data.username} registered successfully`);
        console.log("Registered:", data);
    } catch (error) {
        console.error('Error while registering user: ' + error.message);
    }

    /*$.ajax({
        url: HOSTADDRESS + "/api/users",
        type: "POST",
        data: formData,
        processData: false,
        contentType: false,
        success: function (data) {
            console.log("Registered:", data);
        },
        error: function (xhr) {
            console.error("Error:", xhr.responseText);
        }
    });*/
});