

const explicacao = document.getElementById('explicacao');

const detalhe = document.querySelectorAll('.detalhe');

detalhe.forEach((resposta)=> {

	resposta.addEventListener('click', (event) => {
		let explicacaoConteudo ="<strong></strong>"

		if(resposta.id ==="Age") {
			explicacaoConteudo += "I'm 25"
		} 
		else if (resposta.id === "AcademicBackground") {
			explicacaoConteudo += "<ul>Degree in Marketing and Post-Graduation in Management Tools for BusinessCompetitiveness </ul>"
		}
			else if (resposta.id === "WorkExperience") {
			explicacaoConteudo += "Repoting officer "
		}
			else if (resposta.id === "Extracurricular") {
			explicacaoConteudo += "<ul> <li>Marketing Course Committee 2016-2017 and 2017-2018 </li> <li> Organization of the XXVIII Cultural Week of ISCAP(academic event</li> <li>Organization of ISCAPADELA (academic event) </li> <li>Volunteer in the project Estação do amor</li></ul>"
		} 

		else {
		    explicacaoConteudo += "<ul><li> From Basic to Advanced - The Complete MicrosoftExcel Course | Udemy | 2020 </li><li> SQL-Server course | Udemy | 2021 </li> <li> Power BI for Data science | Data Science Academy |2021 </li> <li> Python Fundamentals | Data Science Academy | 2021</li> </ul> " 

			}

		explicacao.innerHTML=explicacaoConteudo;
		})
})

