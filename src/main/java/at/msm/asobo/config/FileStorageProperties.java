package at.msm.asobo.config;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

@Component
@ConfigurationProperties(prefix = "app.file-storage")
public class FileStorageProperties {
    private String basePath;
    private String profilePictureSubfolder;
    //private String eventPictureSubfolder;

    public String getBasePath() {
        return basePath;
    }

    public void setBasePath(String basePath) {
        this.basePath = basePath;
    }

    public String getProfilePictureSubfolder() {
        return profilePictureSubfolder;
    }

    public void setProfilePictureSubfolder(String profilePictureSubfolder) {
        this.profilePictureSubfolder = profilePictureSubfolder;
    }

    /*public String getEventPictureSubfolder() {
        return eventPictureSubfolder;
    }

    public void setEventPictureSubfolder(String eventPictureSubfolder) {
        this.eventPictureSubfolder = eventPictureSubfolder;
    }*/
}
