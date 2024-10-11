package com.project.tailsroute;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ProjectTailsrouteApplication {

	public static void main(String[] args) {
		System.out.println("안녕하세요");
		System.out.println("안녕하세요 조보영입니다.");
		System.out.println("안녕하세요 조보영입니다. DB 설정도 좀 만졌습니다.");
		System.out.println("안녕하세요 인사빌런입니다.");

		SpringApplication.run(ProjectTailsrouteApplication.class, args);
	}
}
