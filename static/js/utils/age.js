function get_post_age(postdate) {	
    let one_day=1000*60*60*24;
    let one_month=1000*60*60*24*30;
    let today = new Date().getTime();
    let age_string;

	let difference_ms = today - postdate;
    let age_days = Math.round(difference_ms/one_day);

    if (age_days <= 0 ) {
        age_string = "Posted today"
    }
    else if (age_days < 30) {
        age_string = age_days + ' days ago';
    }
    else if (age_days >= 30) {
        let age_months = Math.round(difference_ms/one_month);
        if (age_months < 12) {
            age_string = age_months + ' months ago';
        }
        else {
            let age_years = Math.floor(age_months / 12);
            let age_rem_months = age_months % 12;
            age_string = age_rem_months ? age_years + 'y ' + age_rem_months + 'm ago' : age_years + 'y ago';
        }
    }
    return age_string;
}

function update_post_age() {
    let items = document.getElementsByClassName('post_age');
    for (var item of items) {
      let postdate = Date.parse(item.getAttribute('pdate'));
      item.innerHTML = get_post_age(postdate);
    }
}


