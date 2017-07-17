import moment from './moment';
import { isEmpty, uniqBy } from 'lodash';

export function columnHelper(startTimeCurrent, sortedArray, column = 0) {
  if (isEmpty(sortedArray)) {
    return { column: 0 };
  }

  const lastAppPerColumn = uniqBy(sortedArray.slice().reverse(), 'column');
  const match = lastAppPerColumn.find(x =>
    moment(startTimeCurrent).isAfter(moment(x.end))
  );

  if (match) {
    return { column: match.column };
  }
  const newcolumn = sortedArray[sortedArray.length - 1].column + 1;
  return { column: newcolumn };
}
