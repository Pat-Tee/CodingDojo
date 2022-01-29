import java.util.HashMap;
import java.util.Set;

public class HashMappy {

	public static void hash() {

		HashMap<String, String> playlist = new HashMap<String, String>();
		
		playlist.put("Hannah Montana", "Singing a song");
		playlist.put("Daddy", "That's delicious daddy");
		playlist.put("Happy", "Happy happy joy joy");
		playlist.put("Themesong", "Oooooooohhhh....Who lives in a pineapple under the sea??");

		System.out.println( playlist.get("Daddy") );

		Set<String> titles = playlist.keySet();
		for (String title : titles) {
			System.out.println( title+" : "+playlist.get(title) );
		}
	}

	
}
