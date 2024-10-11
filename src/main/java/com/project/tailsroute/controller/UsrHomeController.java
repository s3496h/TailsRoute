package com.project.tailsroute.controller;


import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class UsrHomeController {
    @GetMapping("/usr/home/main")
    public String showMain(Model model) {
        model.addAttribute("message", "DB추가");
        return "usr/home/main";

    }

    @GetMapping("/usr/member/login")
    public String showLogin(Model model) {
        model.addAttribute("message", "DB추가");
        return "usr/member/login";

    }
}