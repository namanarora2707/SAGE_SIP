#include <bits/stdc++.h>
using namespace std;
double angleClock(int hour, int minutes) {
    double mh=6.0*minutes;
    double hh=30.0*hour+0.5*minutes;
    double ans=abs(hh-mh);
    return min(ans,360.0-ans);
}
int main() {
    cout<<angleClock(12,30)<<endl;
    return 0;
}