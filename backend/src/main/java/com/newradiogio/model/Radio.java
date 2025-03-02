package com.newradiogio.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "radios")
public class Radio {
    @Id
    private String id;
    private String name;
    private String mainUrl;
    private String url1;
    private String url2;
    private String url3;

    public Radio(String id, String name, String mainUrl, String url1, String url2, String url3) {
        this.id = id;
        this.name = name;
        this.mainUrl = mainUrl;
        this.url1 = url1;
        this.url2 = url2;
        this.url3 = url3;
    }

    // Getters and setters
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getMainUrl() {
        return mainUrl;
    }

    public void setMainUrl(String mainUrl) {
        this.mainUrl = mainUrl;
    }

    public String getUrl1() {
        return url1;
    }

    public void setUrl1(String url1) {
        this.url1 = url1;
    }

    public String getUrl2() {
        return url2;
    }

    public void setUrl2(String url2) {
        this.url2 = url2;
    }

    public String getUrl3() {
        return url3;
    }

    public void setUrl3(String url3) {
        this.url3 = url3;
    }
}
