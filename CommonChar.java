import  java.util.*;
public class CommonChar {
    public static void main(String[] args) {
        String[] str = { "aaaabbddbcccd", "asgsddfvf", "aaaaacbbddbbbbbzd" ,"dd"};
        int a[][] = new int[str.length][255];
        int b[][] = new int[255][2];
        for (int i = 0; i < str.length; i++) {
            for (char e : str[i].toCharArray()) {
                a[i][e] = a[i][e] + 1;
            }
        }
        for (int i = 0; i < 225; i++) {
            int min = 0;
            int count = 0;
            
            for (int j = 0; j < str.length; j++) {
               
                if (a[j][i] == 0) {
                    min=0;
                    break;
                    
                }
                if (count == 0) {
                    min = a[j][i];
                    count = count + 1;
                    count++;
                   
                }
                
                if (a[j][i] < min) {
                    min = a[j][i];
                    count++;
                   
                }
            }
            if(min!=0){
             b[i][0] = i;
            b[i][1] = min;
           
        }
                
        }
        List<Character> list=new ArrayList<>();
        for (int i = 0; i < 225; i++) {
                if(b[i][1]!=0){
                System.out.println((char)b[i][0]+" "+b[i][1]);
                for(int j=0;j<b[i][1];j++){
                list.add((char)b[i][0]);
                }
            }
             if(b[i][1]!=0){
            System.out.println();}
            }
            System.out.println(list);
        }
        
    }
