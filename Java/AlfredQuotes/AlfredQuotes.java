import java.util.Date;

public class AlfredQuotes {
//BEING CLASS
    public String basicGreeting() {
        return "Hello, lovely to see you. How are you?";
    }

    public String guestGreeting(String name, String dayPeriod) {
        return "Welcome, "+name+", it is a lovely "+dayPeriod+", wouldn't you agree?";
    }

    public String dateAnnouncement() {
        Date date = new Date();
        return "Today is "+date;
    }
    public String respondBeforeAlexis(String conversation) {
        if (conversation.contains("Alexis"))
            return "Never mind her, you'll be waiting all day.";
        else if (conversation.contains("Alfred"))
            return "Indeed, you may rest easy.";
        else return "Well then, carry on, and don't mind me.";
        //reminder, indexOf(string) returns the array index of the start of a given character
        //or string segment
    }
//END CLASS
}
