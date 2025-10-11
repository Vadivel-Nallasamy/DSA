var userName: string = 'nandhakuamr';
function NameGetter(name: string) {
  return function (data: any) {
    console.log('kkk');
  };
}

userName = 55 as any;
NameGetter(userName);
