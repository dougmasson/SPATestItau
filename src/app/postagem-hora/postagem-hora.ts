import { DatePipe } from '@angular/common';

export interface PostagemHora {
  dataExecucao: string;
  data: DatePipe,
  hora: string,
  total: number,
}
