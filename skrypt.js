function cena()
{
    var dorosli = document.getElementById("dor").value;
    var dzieci = document.getElementById("dz").value;

    if(!isNaN(dorosli) && dorosli != "")
        {
           var suma = 350 * dzieci + 550 * dorosli; document.getElementById("pusty").innerHTML="<p>Do zapłaty masz " + suma + "złotych</p><p>Pamiętaj, że cena obejmuje:<ul><li>Bilety na mecz</li><li>Nocleg w Manchesterze</li><li>Bilety na samolot</li><li>Zwiedzanie miasta</li></ul></p>";
        }
}