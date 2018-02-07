class Solution:
    """ DFS approach
    def combinationSum(self, candidates, target):
        
        :type candidates: List[int]
        :type target: int
        :rtype: List[List[int]]
        
        res = []
        candidates.sort()
        self.dfs(candidates, target, 0, [], res)
        return res
        
    def dfs(self, candidates, target, index, path, res):
        if target <= 0:
            if target == 0:
                res.append(path)
            return
        for i in range(index, len(candidates)):
            self.dfs(candidates, target - candidates[i], i, path + [candidates[i]], res)
    """
        
    """ DP approach """
    def combinationSum(self, candidates, target):
        """
        :type candidates: List[int]
        :type target: int
        :rtype: List[List[int]]
        """
        dp = []
        for i in range(target + 1):
            dp.append([])
        print('dp:',dp)
        dp[0] = [[]]
        for candidate in candidates:            
            for sub_target in range(0, target - candidate + 1):
                combinations = dp[sub_target]
                new_combinations = []
                for combination in combinations:
                    new_combinations.append(combination + [candidate])
                dp[sub_target + candidate].extend(new_combinations)

        return dp[target]
        

