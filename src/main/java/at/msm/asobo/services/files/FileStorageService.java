package at.msm.asobo.services.files;

import at.msm.asobo.config.FileStorageProperties;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.io.InputStream;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.nio.file.*;
import java.util.UUID;

@Service
public class FileStorageService {
    private final Path baseStoragePath;

    public FileStorageService(FileStorageProperties fileStorageProperties) throws IOException {
        this.baseStoragePath = Paths.get(fileStorageProperties.getBasePath());
        Files.createDirectories(baseStoragePath);
    }

    public String store(MultipartFile file) {
        return store(file, "misc");
    }

    public String store(MultipartFile file, String subFolderName) {
        String sanitizedFilename = file.getOriginalFilename().replaceAll("[^a-zA-Z0-9\\.\\-]", "_");
        String filename = UUID.randomUUID() + "_" + sanitizedFilename;

        Path destinationPath = this.baseStoragePath;
        if (subFolderName != null && !subFolderName.isBlank()) {
            destinationPath = destinationPath.resolve(subFolderName);
            try {
                Files.createDirectories(destinationPath); // Ensure subdirectory exists
            } catch (IOException e) {
                throw new RuntimeException("Could not create subfolder: " + subFolderName, e);
            }
        }

        Path targetFile = destinationPath.resolve(filename);

        try (InputStream in = file.getInputStream()) {
            Files.copy(in, targetFile, StandardCopyOption.REPLACE_EXISTING);
            return destinationPath + "/" + URLEncoder.encode(filename, StandardCharsets.UTF_8);
        } catch (IOException e) {
            throw new RuntimeException("Failed to save file", e);
        }
    }
}
