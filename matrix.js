var N=5
matrix=[]
mrow=[]
for(i=1;i<=N;i++){
mrow.push(i)
matrix.push(mrow)
}
var sum=0
for(i=0;i<N;i++){
sum+=matrix[i][i]
}
console.log(matrix);
console.log(sum);

