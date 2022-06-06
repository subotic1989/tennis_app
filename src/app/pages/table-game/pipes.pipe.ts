import { Pipe, PipeTransform } from '@angular/core';
import { PlayerRankInterface } from './models/player-rank.interface';

@Pipe({
  name: 'pipeRankingList',
})
export class RankingListPipe implements PipeTransform {
  transform(players: PlayerRankInterface[]): any {
    return players.sort(function (a: any, b: any) {
      return b.points - a.points;
    });
  }
}
