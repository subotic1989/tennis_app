import { Pipe, PipeTransform } from '@angular/core';
import { PlayerResponseInterface } from '../players/store/types/playerResponse.interface';

@Pipe({
  name: 'pipeRankingList',
})
export class RankingListPipe implements PipeTransform {
  transform(players: PlayerResponseInterface[]): PlayerResponseInterface[] {
    return players
      ?.slice()
      .sort(function (a: PlayerResponseInterface, b: PlayerResponseInterface) {
        return b.points - a.points;
      });
  }
}
