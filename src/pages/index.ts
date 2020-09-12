import { config as homeConfig } from './home';
import { config as movieConfig } from './movies';
import { config as aboutConfig } from './about';
import { config as codeConfig } from './code';

const array = [homeConfig, movieConfig, aboutConfig, codeConfig];

export const pages = array.map((page) => page.page);
export const routes = array.flatMap((page) => page.routes);
