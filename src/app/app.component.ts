import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import Highcharts from 'highcharts';
import { HighchartsChartModule } from 'highcharts-angular';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HighchartsChartModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'inclusao-digital-app';

  Highcharts: typeof Highcharts = Highcharts;

  chartOptions: Highcharts.Options = {
    chart: {
      type: 'column',
    },
    title: {
      text: 'Acesso à Internet por Unidade da Federação (2024)',
    },
    xAxis: {
      categories: [
        'Distrito Federal',
        'Santa Catarina',
        'São Paulo',
        'Paraná',
        'Goiás',
        'Rondônia',
        'Rio Grande do Sul',
        'Mato Grosso do Sul',
        'Rio de Janeiro',
        'Mato Grosso',
        'Espírito Santo',
        'Minas Gerais',
        'Rio Grande do Norte',
        'Amapá',
        'Tocantins',
        'Ceará',
        'Paraíba',
        'Pernambuco',
        'Sergipe',
        'Alagoas',
        'Bahia',
        'Piauí',
        'Roraima',
        'Maranhão',
        'Pará',
        'Amazonas',
        'Acre',
      ],
      title: {
        text: 'Estado',
      },
      labels: {
        rotation: -45,
      },
    },
    yAxis: {
      min: 70,
      max: 100,
      title: {
        text: 'Percentual de acesso à internet (%)',
      },
    },
    tooltip: {
      pointFormat: 'Acesso: <b>{point.y:.1f}%</b>',
    },
    series: [
      {
        name: 'Percentual',
        type: 'column',
        colorByPoint: true,
        data: [
          96.2, 94.8, 93.5, 92.5, 92.2, 91.6, 91.4, 91.1, 91.1, 91.0, 90.4,
          89.5, 88.4, 87.3, 87.1, 87.0, 86.9, 86.7, 85.6, 85.5, 85.1, 82.8,
          80.5, 80.2, 79.4, 77.7, 75.2,
        ],
      },
    ],
  };

  internetAccessChart: Highcharts.Options = {
    chart: { type: 'column' },
    title: { text: 'Acesso à Internet dos Alunos' },
    xAxis: {
      categories: ['Com acesso', 'Wi-Fi', 'Dados móveis'],
      title: { text: 'Tipo de Acesso' },
    },
    yAxis: {
      min: 0,
      title: { text: 'Número de Alunos' },
    },
    series: [
      {
        name: 'Quantidade',
        type: 'column',
        colorByPoint: true,
        data: [40, 32, 40],
      },
    ],
  };

  internetProblemsChart: Highcharts.Options = {
    chart: { type: 'pie' },
    title: { text: 'Frequência de Problemas de Conexão' },
    series: [
      {
        name: 'Alunos',
        type: 'pie',
        data: [
          { name: 'Frequentemente', y: 38 },
          { name: 'Raramente', y: 2 },
        ],
      },
    ],
  };

  devicesChart: Highcharts.Options = {
    chart: { type: 'bar' },
    title: { text: 'Equipamentos Disponíveis para Acesso' },
    xAxis: {
      categories: ['Celular', 'Tablet', 'Notebook'],
      title: { text: null },
    },
    yAxis: {
      min: 0,
      title: { text: 'Número de Alunos' },
    },
    series: [
      {
        name: 'Alunos',
        type: 'bar',
        data: [37, 8, 18],
      },
    ],
  };

  studyFrequencyChart: Highcharts.Options = {
    chart: { type: 'column' },
    title: { text: 'Frequência de Uso da Internet para Estudo' },
    xAxis: {
      categories: ['Algumas vezes por semana', 'Raramente', 'Nunca'],
      title: { text: 'Frequência' },
    },
    yAxis: {
      min: 0,
      title: { text: 'Número de Alunos' },
    },
    series: [
      {
        name: 'Alunos',
        type: 'column',
        data: [28, 8, 4],
      },
    ],
  };
}
