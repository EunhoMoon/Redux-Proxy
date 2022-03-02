package study.janek.springreact;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SongController {

	@GetMapping("/api/getSongList")
	public String getSongList() {
		return null;
	}
	
}
