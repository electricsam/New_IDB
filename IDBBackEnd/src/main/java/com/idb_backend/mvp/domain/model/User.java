package com.idb_backend.mvp.domain.model;

import javax.persistence.*;
import java.io.Serializable;

@Entity(name = "USERS")
public class User implements Serializable{
    private static final long serialVersionUID = 3678107792576131001L;

    @Id
    @Column(name="id")
//    @Column(name="id", columnDefinition = "serial")
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "first_name", length = 250)
    private String firstName;

    @Column(name = "last_name", length = 250)
    private String lastName;

    @Column(name = "email", length = 250)
    private String email;

    @Column(name = "gender ", length = 7)
    private String gender;

    @Column(name = "avatar", length = 400)
    private String avatar;

    @Column(name = "company", length = 250)
    private String company;

    @Column(name = "address", length = 500)
    private String address;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getAvatar() {
        return avatar;
    }

    public void setAvatar(String avatar) {
        this.avatar = avatar;
    }

    public String getCompany() {
        return company;
    }

    public void setCompany(String company) {
        this.company = company;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

//     TODO: insert hashCode() and equals() implementations

}
