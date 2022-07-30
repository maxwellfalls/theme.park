
 //Custom Text Header //
 // ACSII slant font

// Needs to be inside <section id="login" class="shadow">
// YOU MUST ESCAPE ANY SINGLE BACKSLASHES LIKE SO: \\

let custom_text_header = `
<div class="custom-text-header"> <pre>
                                           d8,                  
                                          `8P    d8P            
                                              d888888P          
 .d888b, d8888b  88bd88b d8888b  88bd88b   88b  ?88'  ?88   d8P 
 ?8b,   d8b_,dP  88P'  `d8b_,dP  88P' ?8b  88P  88P   d88   88  
   `?8b 88b     d88     88b     d88   88P d88   88b   ?8(  d88  
`?888P' `?888P'd88'     `?888P'd88'   88bd88'   `?8b  `?88P'?8b 
                                                             )88
                                                            ,d8P
                                                         `?888P'
                                                                 </pre> </div>
`;
document.getElementById("login").innerHTML += custom_text_header
