package ninja.controllers;
import java.util.ArrayList;
import java.util.Random;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
@Controller
public class MainPage {
	
 public MainPage() {
	
 }
 @GetMapping("/")
  public String main(HttpSession session ) {
	if(session.getAttribute("gold") == null ) {
		session.setAttribute("gold", 0);
		ArrayList <String> Message= new ArrayList<String>();
        session.setAttribute("message",Message);
	}
	return "ninjamain.jsp";
  }

 @PostMapping("/process_money")
public String checking(@RequestParam(value="building")String building,
                       HttpSession session)

		{
	 if (building.equals("Cave")) {
		 Integer gold= new Random().nextInt((10-5)+1)+5;
		 Integer sGold = (Integer) session.getAttribute("gold");
		 session.setAttribute("gold", gold+sGold);
		 
		 String smessage="<li style='color:green;'>you earn "+gold+"this time</li>";
		 ArrayList <String> sMessage= (ArrayList<String>) session.getAttribute("message");
	     sMessage.add(smessage);
	     session.setAttribute("message",sMessage);	
		  
	 }
	 
	 if (building.equals("Farm")) {
		 Integer gold= new Random().nextInt((20-10)+1)+10;	
		 Integer sGold = (Integer) session.getAttribute("gold");
		 session.setAttribute("gold", gold+sGold);
		 
		 String smessage="<li style='color:green;'>you earn "+gold+"this time</li>";
		 ArrayList <String> sMessage= (ArrayList<String>) session.getAttribute("message");
	     sMessage.add(smessage);
	     session.setAttribute("message",sMessage);	
		  
	 }
	 if (building.equals("House")) {
		 Integer gold= new Random().nextInt((5-2)+1)+2;	
		 Integer sGold = (Integer) session.getAttribute("gold");
		 session.setAttribute("gold", gold+sGold);
		 
		 String smessage="<li style='color:green;'>you earn "+gold+"this time</li>";
		 ArrayList <String> sMessage= (ArrayList<String>) session.getAttribute("message");
	     sMessage.add(smessage);
	     session.setAttribute("message",sMessage);	
		  
	 }
	 if (building.equals("Casino")) {
		 
		 Integer gold= new Random().nextInt((50+50)+1)-50;	
		 Integer sGold = (Integer) session.getAttribute("gold");
		 session.setAttribute("gold", gold+sGold);
		 if (gold>0) {
		 String smessage="<li style='color:green;'>you earn "+gold+"this time</li>";
		 ArrayList <String> sMessage= (ArrayList<String>) session.getAttribute("message");
	     sMessage.add(smessage);
	     session.setAttribute("message",sMessage);	}
		 else{
			 String smessage= "<li style='color:red;'>lost  "+gold+"this time</li>";
			 ArrayList <String> sMessage= (ArrayList<String>) session.getAttribute("message");
		     sMessage.add(smessage);
		     session.setAttribute("message",sMessage);	}
			  
		 
	 }
	 
	 
	 
	 
	 return "redirect:/";
	 
 }
 
	
	
	
	
	
}
