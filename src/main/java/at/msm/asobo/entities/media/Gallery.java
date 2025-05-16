package at.msm.asobo.entities.media;

import java.util.ArrayList;

public class Gallery {

    private String name;
    private ArrayList<Medium> media;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public ArrayList<Medium> getMedia() {
        return media;
    }

    public void setMedia(ArrayList<Medium> media) {
        this.media = media;
    }
}
