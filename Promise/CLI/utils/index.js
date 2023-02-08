import chalk from "chalk";
import { Spinner } from "cli-spinner";


function loading(msg){
    var spinner = new Spinner(chalk.blue(msg));
    spinner.setSpinnerString("|/-\\");
    spinner.start();
    return spinner
}

export{loading}