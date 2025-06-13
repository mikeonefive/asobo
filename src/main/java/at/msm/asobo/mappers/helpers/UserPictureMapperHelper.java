package at.msm.asobo.mappers.helpers;

import at.msm.asobo.config.FileStorageProperties;
import at.msm.asobo.services.files.FileStorageService;
import org.mapstruct.Named;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Controller;
import org.springframework.web.multipart.MultipartFile;

import java.net.URI;


@Component
public class UserPictureMapperHelper {
    @Autowired
    private FileStorageService fileStorageService;

    private FileStorageProperties fileStorageProperties;

    @Named("mapPicture")
    public String map(MultipartFile picture) {
        if (picture == null || picture.isEmpty()) {
            return null;
        }
        return fileStorageService.store(picture, fileStorageProperties.getProfilePictureSubfolder());
    }

    /*@Named("stringToUri")
    public URI stringToUri(String value) {
        return value == null ? null : URI.create(value);
    }

    @Named("uriToString")
    public String uriToString(URI uri) {
        return uri == null ? null : uri.toString();
    }*/
}
