import moment from 'moment-timezone';
import 'moment/locale/pt-br';

function parseSummaryData(data) {
  return [
    getBalanceViewData(data),
    getHistoryViewData(data)
  ];

}

function getBalanceViewData({ totalTransfered, totalPaid, totalReceived, balance, recentTransfers }) {
  const type = 'balance';
  balance = getFormatedValue(balance);
  const [ integerDigits, fractionDigits ] = balance.split(',');

  const paidProportion = Math.round((totalPaid/totalTransfered) * 10);
  const receivedProportion = Math.round((totalReceived/totalTransfered) * 10);

  const { type: txType, value, counterpartName, createdAt } = recentTransfers[0];

  const formatedValue = getFormatedValue(value);
  const date = getFormatedDate(createdAt);

  const infoText = `$${formatedValue} ${txType === 'send' ? 'pago' : 'recebido'}`;
  const infoText2 = `${txType === 'send' ? 'para' : 'de'} ${counterpartName}, ${date}`;

  return {
    type,
    data: { integerDigits, fractionDigits, paidProportion, receivedProportion, txType, infoText, infoText2 }
  };
}

function getHistoryViewData({ recentTransfers }) {
  const type = 'history';

  recentTransfers = recentTransfers.map(transfer => {
    const { type: txType, value, from, to, counterpartName, createdAt } = transfer;

    const formatedValue = getFormatedValue(value);
    const date = getFormatedDate(createdAt);

    const infoText = `$${formatedValue} ${txType === 'send' ? 'pago' : 'recebido'}`;
    const infoText2 = `${txType === 'send' ? 'para' : 'de'} ${counterpartName}, ${date}`;

    const counterpartUsername = txType === 'send' ? to : from;

    return { txType, infoText, infoText2, counterpartUsername };
  });

  return {
    type,
    data: { recentTransfers }
  }
}

function getFormatedValue(value) {
  return value.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function getFormatedDate(date) {
  const tzDate = moment.utc(date).tz('America/Sao_Paulo');
  return tzDate.locale('pt-br').calendar();
}

export default {
  parseSummaryData
}