function solution(s, t) { 
    // mencari / menghitung berapa sprint pelari itu bisa lakukan
    const sprint = Math.min(Math.floor(s / 3) + 1, Math.floor((t + 1) / 2));
    return (t + sprint) * s - sprint * (sprint - 1) * 3 / 2;
}
console.log(solution(2, 4))