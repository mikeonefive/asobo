package at.msm.asobo.dto.user;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import java.net.URI;

public class UserRegisterDTO {

    @NotBlank(message = "Username is mandatory for user registration")
    @Size(min = 3, max = 50, message = "Username must be between 3 and 50 characters")
    private String username;

    @NotBlank(message = "Email is mandatory for user registration")
    @Email(message = "Email should be valid")
    private String email;

    @NotBlank(message = "Password is mandatory for user registration")
    @Size(min = 6, message = "Password must be at least 6 characters")
    private String password;

    private URI pictureURI;

    private String location;

    @NotBlank(message = "Salutation is mandatory for user registration")
    private String salutation;

    public UserRegisterDTO() {
    }

    public String getUsername() {
        return this.username;
    }

    public String getEmail() {
        return this.email;
    }

    public String getPassword() {
        return this.password;
    }

    public URI getPictureURI() {
        return this.pictureURI;
    }

    public String getLocation() {
        return this.location;
    }

    public String getSalutation() {
        return salutation;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setPictureURI(URI pictureURI) {
        this.pictureURI = pictureURI;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public void setSalutation(String salutation) {
        this.salutation = salutation;
    }
}
