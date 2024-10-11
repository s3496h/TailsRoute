package com.project.tailsroute.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class UsrDiaryController {
    @GetMapping("/usr/diary/list")
    public String showlist(Model model){
        model.addAttribute("list","다이어리");
        return "usr/diary/list";
    }
    @GetMapping("/usr/diary/write")
    public String dowrite(Model model){
        model.addAttribute("list","다이어리");
        return "usr/diary/write";
    }
}
