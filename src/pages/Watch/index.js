import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LineChart, { parseGroupingBy } from 'react-linechart';
import '../../../node_modules/react-linechart/dist/styles.css';

import Select from '../../components/Select';
import {
  listRequest,
  getPickerRequest,
} from '../../store/modules/watch/actions';

import { Container, Top, Botton, Picker, Table } from './styles';

export default function Watch() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listRequest());
  }, []); // eslint-disable-line

  const stock = useSelector(state => state.watch.list);
  const picker = useSelector(state => state.watch.picker);

  const data = parseGroupingBy(
    picker,
    'date',
    'close',
    '',
    i => i,
    ['#169bd5'],
    1
  );

  return (
    <Container>
      <Top>
        {picker.length !== 0 && (
          <LineChart
            width={400}
            height={300}
            data={data}
            interpolate="linear"
            xLabel="Date"
            yLabel="Price"
            isDate
            hidePoints
          />
        )}
        <Picker>
          <Select
            name="stock"
            id="stock"
            placeholder="Pick Symbol"
            options={stock}
            onChange={e => dispatch(getPickerRequest(e.target.value))}
          />
        </Picker>
      </Top>
      {picker.length !== 0 && (
        <Botton>
          <Table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Close</th>
                <th>Volume</th>
              </tr>
            </thead>

            {picker.map(day => (
              <tbody>
                <tr>
                  <td>{day.date}</td>
                  <td>{day.close}</td>
                  <td>{day.volume}</td>
                </tr>
              </tbody>
            ))}
          </Table>
        </Botton>
      )}
    </Container>
  );
}
