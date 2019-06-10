import { MainHttpService } from './../main-http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {
  displayedColumns: string[] = ['Matches', 'DateandTime', 'Venue'];
  dataSource = [
    {
      id: '1229632',
      date: '2019-06-15',
      time: '6:00 am',
      round: '1',
      home_name: 'Brazil',
      away_name: 'Bolivia',
      location: 'Estádio Cícero Pompeu de Toledo',
      league_id: '962',
      home_id: '1448',
      away_id: '1728'
    },
    {
      id: '1229633',
      date: '2019-06-16',
      time: '12:30 pm',
      round: '1',
      home_name: 'Venezuela',
      away_name: 'Peru',
      location: 'Arena do Grêmio',
      league_id: '962',
      home_id: '1850',
      away_id: '1441'
    },
    {
      id: '1229634',
      date: '2019-06-19',
      time: '3:00 am',
      round: 'GS',
      home_name: 'Bolivia',
      away_name: 'Peru',
      location: 'Estadio Jornalista Mário Filho',
      league_id: '962',
      home_id: '1728',
      away_id: '1441'
    },
    {
      id: '1229635',
      date: '2019-06-19',
      time: '6:00 am',
      round: 'GS',
      home_name: 'Brazil',
      away_name: 'Venezuela',
      location: 'Estádio Cícero Pompeu de Toledo',
      league_id: '962',
      home_id: '1448',
      away_id: '1850'
    },
    {
      id: '1229636',
      date: '2019-06-23',
      time: '12:30 am',
      round: 'GS',
      home_name: 'Peru',
      away_name: 'Brazil',
      location: 'Arena Corinthians',
      league_id: '962',
      home_id: '1441',
      away_id: '1448'
    },
    {
      id: '1229637',
      date: '2019-06-23',
      time: '12:30 am',
      round: 'GS',
      home_name: 'Bolivia',
      away_name: 'Venezuela',
      location: 'Estadio Jornalista Mário Filho',
      league_id: '962',
      home_id: '1728',
      away_id: '1850'
    },
    {
      id: '1229638',
      date: '2019-06-16',
      time: '3:30 am',
      round: 'GS',
      home_name: 'Argentina',
      away_name: 'Colombia',
      location: 'Arena Fonte Nova',
      league_id: '961',
      home_id: '1443',
      away_id: '1457'
    },
    {
      id: '1283606',
      date: '2019-06-17',
      time: '12:30 am',
      round: 'GS',
      home_name: 'Paraguay',
      away_name: 'Qatar',
      location: 'Maracana',
      league_id: '961',
      home_id: '4040',
      away_id: '1427'
    },
    {
      id: '1283607',
      date: '2019-06-20',
      time: '3:00 am',
      round: 'GS',
      home_name: 'Colombia',
      away_name: 'Qatar',
      location: 'Estádio Cícero Pompeu de Toledo',
      league_id: '961',
      home_id: '1457',
      away_id: '1427'
    },
    {
      id: '1283608',
      date: '2019-06-20',
      time: '6:00 am',
      round: 'GS',
      home_name: 'Argentina',
      away_name: 'Paraguay',
      location: 'Estádio Governador Magalhães Pinto',
      league_id: '961',
      home_id: '1443',
      away_id: '4040'
    },
    {
      id: '1283609',
      date: '2019-06-24',
      time: '12:30 am',
      round: 'GS',
      home_name: 'Colombia',
      away_name: 'Paraguay',
      location: 'Arena Fonte Nova',
      league_id: '961',
      home_id: '1457',
      away_id: '4040'
    },
    {
      id: '1283610',
      date: '2019-06-24',
      time: '12:30 am',
      round: 'GS',
      home_name: 'Qatar',
      away_name: 'Argentina',
      location: 'Arena do Grêmio',
      league_id: '961',
      home_id: '1427',
      away_id: '1443'
    },
    {
      id: '1229644',
      date: '2019-06-17',
      time: '3:30 am',
      round: 'GS',
      home_name: 'Uruguay',
      away_name: 'Ecuador',
      location: 'Estádio Governador Magalhães Pinto',
      league_id: '960',
      home_id: '1434',
      away_id: '1847'
    },
    {
      id: '1229645',
      date: '2019-06-18',
      time: '4:30 am',
      round: 'GS',
      home_name: 'Japan',
      away_name: 'Chile',
      location: 'Estádio Cícero Pompeu de Toledo',
      league_id: '960',
      home_id: '1458',
      away_id: '1749'
    },
    {
      id: '1229646',
      date: '2019-06-21',
      time: '4:30 am',
      round: 'GS',
      home_name: 'Uruguay',
      away_name: 'Japan',
      location: 'Arena do Grêmio',
      league_id: '960',
      home_id: '1434',
      away_id: '1458'
    },
    {
      id: '1229647',
      date: '2019-06-22',
      time: '4:30 am',
      round: 'GS',
      home_name: 'Ecuador',
      away_name: 'Chile',
      location: 'Arena Fonte Nova',
      league_id: '960',
      home_id: '1847',
      away_id: '1749'
    },
    {
      id: '1229648',
      date: '2019-06-25',
      time: '4:30 am',
      round: 'GS',
      home_name: 'Chile',
      away_name: 'Uruguay',
      location: 'Estadio Jornalista Mário Filho',
      league_id: '960',
      home_id: '1749',
      away_id: '1434'
    },
    {
      id: '1229649',
      date: '2019-06-25',
      time: '4:30 am',
      round: 'GS',
      home_name: 'Ecuador',
      away_name: 'Japan',
      location: 'Estádio Governador Magalhães Pinto',
      league_id: '960',
      home_id: '1847',
      away_id: '1458'
    }
  ];

  constructor(private http: MainHttpService) {}

  ngOnInit() {}
}
