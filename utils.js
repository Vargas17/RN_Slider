import moment from 'moment-timezone';
import 'moment/locale/pt-br';

function parseSummaryData(data) {
  return [
    getBalanceViewData(data),
    getBalanceViewData(data),
    getBalanceViewData(data)
  ];

}

function getBalanceViewData({ totalTransfered, totalPaid, totalReceived, balance, recentTransfers }) {
  const type = 'balance';
  balance = balance.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  const [ integerDigits, fractionDigits ] = balance.split(',');

  const paidProportion = Math.round((totalPaid/totalTransfered) * 10);
  const receivedProportion = Math.round((totalReceived/totalTransfered) * 10);

  const { type: txType, value, from, to, createdAt } = recentTransfers[0];
  const formatedValue = value.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  const tzDate = moment.utc(createdAt).tz('America/Sao_Paulo');
  const date = tzDate.locale('pt-br').calendar();

  const infoText = `$${formatedValue} ${txType === 'send' ? 'pago' : 'recebido'}`;
  const infoText2 = `${txType === 'send' ? 'para' : 'de'} ${txType === 'send' ? to : from}, ${date}`;

  return {
    type,
    data: { integerDigits, fractionDigits, paidProportion, receivedProportion, txType, infoText, infoText2 }
  };
}

export default {
  parseSummaryData
}