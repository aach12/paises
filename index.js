const getcode = async () => {
        try {
            const response = await fetch('https://restcountries.com/v3.1/all?fields=name,flags`', {method: 'GET'});
    
            if (response.status === 401) {
                alert('No estas autorizado')
            }
    
            const data = await response.json();
    
            const isocode = data.country.iso_code;
    
            const option = [...countrySelect.children].find(option => option.getAttribute ('data-countrycode') === isocode);
            option.selected = true;
            phoneCode.innerHTML = `+${option.value}`;
            countryValidation = true;
            validateInput(countryValidation, countrySelect);
        }catch (error) {
            console.log(error);
            alert('Hubo un error')
        }
    }
    
    getcode()